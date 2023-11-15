from django.core.validators import MinValueValidator, MaxValueValidator
from django.db import models


class User(models.Model):
    ''' 
    first name: string,
    last name: string,
    email: string,
    phone: string,
    rating: decimal between 0 and 5,
    username: string,
    password: string,
    date joined: date,
    last active: date
    '''
    first_name = models.CharField(max_length=20)
    last_name = models.CharField(max_length=20)
    email = models.EmailField()
    phone = models.CharField(max_length=10)
    rating = models.DecimalField(max_digits=2, decimal_places=1, validators=[
                                 MinValueValidator(0), MaxValueValidator(5)])
    username = models.CharField(max_length=20)
    password = models.CharField(max_length=20)
    date_joined = models.DateField()
    last_active = models.DateField()


class Category(models.Model):
    '''
    name: string,
    description: string
    '''
    name = models.CharField(max_length=255)
    description = models.TextField()


class Service(models.Model):
    '''
    user: User,
    image: string,
    title: string,
    location: string,
    pricing: decimal,
    rating service: decimal between 0 and 5,
    description: string,
    category: Category,
    date posted: date,
    time: time,
    active: boolean
    '''

    user = models.ForeignKey(User, on_delete=models.CASCADE)
    image = models.URLField()
    title = models.CharField(max_length=255)
    location = models.CharField(max_length=255)
    pricing = models.DecimalField(max_digits=10, decimal_places=2)
    rating_service = models.DecimalField(max_digits=2, decimal_places=1, validators=[
                                         MinValueValidator(0), MaxValueValidator(5)])
    description = models.TextField()
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    date_posted = models.DateField()
    time = models.TimeField()
    active = models.BooleanField()


class Review(models.Model):
    '''
    user: User,
    service: Service,
    rating: decimal between 0 and 5,
    comment: string
    '''

    user = models.ForeignKey(User, on_delete=models.CASCADE)
    service = models.ForeignKey(Service, on_delete=models.CASCADE)
    rating = models.DecimalField(max_digits=2, decimal_places=1, validators=[
                                 MinValueValidator(0), MaxValueValidator(5)])
    comment = models.TextField()


class Booking(models.Model):
    '''
    user: User,
    service: Service,
    date: date,
    time: time
    '''

    user = models.ForeignKey(User, on_delete=models.CASCADE)
    service = models.ForeignKey(Service, on_delete=models.CASCADE)
    date = models.DateField()
    time = models.TimeField()
