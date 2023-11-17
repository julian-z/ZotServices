from rest_framework import serializers
from .models import CustomUser, Service, Review
from django.contrib.auth.models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'first_name', 'last_name', 'email')


class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = ('id', 'user', 'user_name', 'service', 'rating', 'comment')


class ServiceSerializer(serializers.ModelSerializer):
    ratings = ReviewSerializer(many=True)

    class Meta:
        model = Service
        fields = ('id', 'user', 'user_name', 'image', 'title', 'location',
                  'spec_location', 'pricing', 'description', 'category', 'ratings')


class CustomUserSerializer(serializers.ModelSerializer):
    user = UserSerializer(many=False)
    services = ServiceSerializer(many=True)
    reviews = ReviewSerializer(many=True)

    class Meta:
        model = CustomUser
        fields = ('user', 'phone', 'profile_pic', 'services', 'reviews')


class CreateServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Service
        fields = ('user', 'image', 'title', 'location', 'spec_location',
                  'pricing', 'description', 'category')
