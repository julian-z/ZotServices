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
from rest_framework.decorators import action
from rest_framework.authentication import TokenAuthentication
# Create your views here.


class CustomUserViewSet(viewsets.ModelViewSet):
    queryset = CustomUser.objects.all()
    serializer_class = CustomUserSerializer


class ReviewViewSet(viewsets.ModelViewSet):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer
    # authentication_classes = (TokenAuthentication,)

    @action(detail=True, methods=['post'])
    def create_review(self, request, pk=None):
        if 'service' in request.data and 'rating' in request.data and 'comment' in request.data:
            user = request.user
            user = user.customuser
            service = Service.objects.get(id=request.data['service'])
            rating = request.data['rating']
            comment = request.data['comment']
            try:
                review = Review.objects.create(
                    user=user, service=service, rating=rating, comment=comment)
                serializer = ReviewSerializer(review, many=False)
                return Response(serializer.data, status=status.HTTP_200_OK)
            except:
                return Response({'message': 'Error creating review'}, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response({'message': 'Please provide all required fields'}, status=status.HTTP_400_BAD_REQUEST)


class ServiceViewSet(viewsets.ModelViewSet):
    queryset = Service.objects.all()
    queryset = Service.objects.annotate(average_ratings=Avg('ratings__rating'))
    serializer_class = ServiceSerializer
    filter_backends = [filters.SearchFilter,
                       DjangoFilterBackend, filters.OrderingFilter]
    search_fields = ['title', 'description',
                     'category', 'location', 'spec_location']
    filterset_fields = ['category', 'location', 'spec_location']
    ordering_fields = ['pricing', 'average_ratings']
    # authentication_classes = (TokenAuthentication,)

    @action(detail=True, methods=['post'])
    def create_service(self, request, pk=None):
        if 'image' in request.data and 'title' in request.data and 'location' in request.data and 'pricing' in request.data and 'description' in request.data and 'category' in request.data and 'spec_location' in request.data:
            image = request.data['image']
            title = request.data['title']
            location = request.data['location']
            spec_location = request.data['spec_location']
            pricing = request.data['pricing']
            description = request.data['description']
            category = request.data['category']
            user = request.user
            custom = user.customuser
            print(request.user)
            try:
                service = Service.objects.create(user=custom, image=image, title=title, location=location,
                                                 spec_location=spec_location, pricing=pricing, description=description, category=category)
                serializer = ServiceSerializer(service, many=False)
                return Response(serializer.data, status=status.HTTP_200_OK)
            except:
                return Response({'message': 'Error creating service'}, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response({'message': 'Please provide all required fields'}, status=status.HTTP_400_BAD_REQUEST)


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


# class CreateRealServiceView(APIView):
#     serializer_class = CreateServiceSerializer
#     authentication_classes = (TokenAuthentication,)

#     def post(self, request, format=None):
#         serializer = CreateServiceSerializer(data=request.data)
#         if serializer.is_valid():
#             service_data = serializer.validated_data
#             image = service_data['image']
#             title = service_data['title']
#             location = service_data['location']
#             spec_location = service_data['spec_location']
#             pricing = service_data['pricing']
#             description = service_data['description']
#             category = service_data['category']
#             user = request.user
#             custom = user.customuser
#             service = Service.objects.create(user=custom, image=image, title=title, location=location,
#                                              spec_location=spec_location, pricing=pricing, description=description, category=category)
#             return Response(ServiceSerializer(service).data, status=status.HTTP_201_CREATED)
#         else:
#             return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
