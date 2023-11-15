from django.urls import path
from .views import UserList, ServiceList, ReviewList, BookingList, CategoryList


urlpatterns = [
    path('users/', UserList.as_view()),
    path('services/', ServiceList.as_view()),
    path('reviews/', ReviewList.as_view()),
    path('bookings/', BookingList.as_view()),
    path('categories/', CategoryList.as_view()),
]
