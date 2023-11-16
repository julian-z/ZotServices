from rest_framework import serializers
from .models import CustomUser, Service, Review
from django.contrib.auth.models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model= User
        fields= ('id','username',)

class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model= Review
        fields= ('id','user', 'service', 'rating', 'comment')

class ServiceSerializer(serializers.ModelSerializer):
    ratings = ReviewSerializer(many=True)
    class Meta:
        model= Service
        fields= ('id','user', 'image', 'title', 'location', 'spec_location', 'pricing', 'description', 'category', 'ratings', 'avg_rating')
    

class CustomUserSerializer(serializers.ModelSerializer):
    user = UserSerializer(many=False)
    services = ServiceSerializer(many=True)
    reviews = ReviewSerializer(many=True)
    class Meta:
        model= CustomUser
        fields= ('user', 'phone', 'first_name', 'last_name', 'email', 'services', 'reviews')