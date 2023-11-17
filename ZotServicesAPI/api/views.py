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
from rest_framework import filters
from django_filters.rest_framework import DjangoFilterBackend
from django.db.models import Avg
# Create your views here.

class CustomUserViewSet(viewsets.ModelViewSet):
    queryset = CustomUser.objects.all()
    serializer_class = CustomUserSerializer

class ReviewViewSet(viewsets.ModelViewSet):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer

class ServiceViewSet(viewsets.ModelViewSet):
    queryset = Service.objects.all()
    queryset=Service.objects.annotate(average_ratings = Avg('ratings__rating'))
    serializer_class = ServiceSerializer
    filter_backends = [filters.SearchFilter, DjangoFilterBackend, filters.OrderingFilter]
    search_fields = ['title', 'description','category','location','spec_location']
    filterset_fields = ['category','location','spec_location']
    ordering_fields = ['pricing','average_ratings']
    
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
