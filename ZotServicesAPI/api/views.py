from django.shortcuts import render
from rest_framework import viewsets
from .models import CustomUser, Service, Review
from .serializers import CustomUserSerializer, ServiceSerializer, ReviewSerializer, CreateServiceSerializer
from django.http import JsonResponse
from django.db.models import Avg, Count
from django.db.models.functions import Coalesce
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, generics
# Create your views here.

class CustomUserViewSet(viewsets.ModelViewSet):
    queryset = CustomUser.objects.all()
    serializer_class = CustomUserSerializer

class ReviewViewSet(viewsets.ModelViewSet):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer

class ServiceViewSet(viewsets.ModelViewSet):
    queryset = Service.objects.all()
    serializer_class = ServiceSerializer
    def list(self, request):
        #Test with endpoints such as ex. http://127.0.0.1:8000/api/services/?category=cleaning&sort=pricing
        fentries=Service.objects
        for field in request.GET:
            if field == "sort" or field=="title":
                continue
            fentries = fentries.filter(**{field: request.GET[field].lower()})
        if "sort" in request.GET and request.GET["sort"] == "pricing":
                fentries= fentries.order_by("pricing")
        #Sorting by rating does not work due to avg_rating not being considered a field
        elif "sort" in request.GET and request.GET["sort"] == "rating":
                serializer = ServiceSerializer(fentries, many=True)
                fentries= fentries.order_by("ratings")
        if "title" in request.GET:
                print(request.GET[field])
                fentries = fentries.filter(**{field: request.GET[field]})
        serializer = ServiceSerializer(fentries, many=True)
        return JsonResponse(serializer.data, safe=False)
class CreateServiceView(APIView):
    serializer_class = CreateServiceSerializer

    def post(self, request, format=None):
        serializer = CreateServiceSerializer(data=request.data)
        if serializer.is_valid():
            service_data = serializer.validated_data
            service = Service.objects.create(user=service_data['user'], image=service_data['image'], title=service_data['title'], location=service_data['location'],
                                            spec_location=service_data['spec_location'], pricing=service_data['pricing'], description=service_data['description'], category=service_data['category'])
            return Response(ServiceSerializer(service).data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

"""
def ServiceCategory(request):
    fentries  = Service.objects.filter(category=cat).filter(location=loc)
    serializer = ServiceSerializer(fentries, many=True)
    return JsonResponse(serializer.data, safe=False)
"""