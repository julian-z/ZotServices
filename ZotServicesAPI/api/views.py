from django.shortcuts import render
from rest_framework import viewsets
from .models import CustomUser, Service, Review
from .serializers import CustomUserSerializer, ServiceSerializer, ReviewSerializer
from django.http import JsonResponse
from django.db.models import Avg, Count
from django.db.models.functions import Coalesce
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
        

"""
def ServiceCategory(request):
    fentries  = Service.objects.filter(category=cat).filter(location=loc)
    serializer = ServiceSerializer(fentries, many=True)
    return JsonResponse(serializer.data, safe=False)
"""