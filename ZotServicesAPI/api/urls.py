from django.contrib import admin
from django.urls import path
from rest_framework import routers
from django.conf.urls import include
from .views import CustomUserViewSet, ServiceViewSet, ReviewViewSet, CreateServiceView

router = routers.DefaultRouter()
router.register('users', CustomUserViewSet)
router.register('services', ServiceViewSet)
router.register('reviews', ReviewViewSet)


urlpatterns = [
    path('', include(router.urls)),
    # path('Createrealservice/', CreateRealServiceView.as_view(),
    #      name='create-real-service'),
    path('Createservices/', CreateServiceView.as_view(), name='create-service')
]
