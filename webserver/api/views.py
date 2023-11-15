from django.shortcuts import render
from rest_framework import generics
from .models import User, Service, Review, Booking, Category
from .serializers import UserSerializer, ServiceSerializer, ReviewSerializer, BookingSerializer, CategorySerializer

# Create your API views here.


# Allows us to view all users, services, reviews, bookings, and categories
class UserList(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class ServiceList(generics.ListCreateAPIView):
    queryset = Service.objects.all()
    serializer_class = ServiceSerializer

class ReviewList(generics.ListCreateAPIView):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer

class BookingList(generics.ListCreateAPIView):
    queryset = Booking.objects.all()
    serializer_class = BookingSerializer

class CategoryList(generics.ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

    