from django.contrib import admin
from .models import CustomUser, Service, Review
from django.contrib.auth.models import User
# Register your models here.

admin.site.register(Service)
admin.site.register(Review)
admin.site.register(CustomUser)