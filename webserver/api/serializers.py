'''
Takes our models (Python) and converts them to a JSON response
'''
from rest_framework import serializers
from .models import User, Service, Review, Booking, Category


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('first_name', 'last_name', 'email', 'password', 'phone',
                  'rating', 'username', 'date_joined', 'last_active')


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('name', 'description')


class ServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Service
        fields = ('user', 'image', 'title', 'location', 'pricing', 'rating_service',
                  'description', 'category', 'date_posted', 'time', 'active')


class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = ('user', 'service', 'rating', 'comment', 'date_posted')


class BookingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Booking
        fields = ('user', 'service', 'date_booked',
                  'time_booked', 'date_posted', 'active')
