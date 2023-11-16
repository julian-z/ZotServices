from django.contrib import admin
from django.urls import path
from rest_framework import routers
from django.conf.urls import include
from .views import CustomUserViewSet, ServiceViewSet, ReviewViewSet

router = routers.DefaultRouter()
router.register('users', CustomUserViewSet)
router.register('services', ServiceViewSet)
router.register('reviews', ReviewViewSet)

urlpatterns = [
    path('', include(router.urls)),
]