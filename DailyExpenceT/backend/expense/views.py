from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from.models import *
# Create your views here.

#Signup API
@csrf_exempt
def signup(request):
    if request.method == 'POST':
       data = json.loads(request.body)
       fullname = data.get('FullName')
       email = data.get('Email')
       password = data.get('Password')

       if UserDetail.objects.filter(Email=email).exists():
         return JsonResponse({'message':'Email already exist'},status=400)
       UserDetail.objects.create(FullName=fullname,Email=email,Password=password)
       return JsonResponse({'message':'User registered Successfully'},status=201)
       
#login API       
@csrf_exempt
def login(request):
    if request.method == 'POST':
       data = json.loads(request.body)
       email = data.get('Email')
       password = data.get('Password')

       try:
          user = UserDetail.objects.get(Email=email,Password=password)
          return JsonResponse({'message':'Login  Successfull','userId':user.id,'userName':user.FullName},status=200)
          
       except:
          return JsonResponse({'message':'Invalid Credentials'},status=400)
       
