from django.core.validators import MinValueValidator, MaxValueValidator
from django.db import models
from django.contrib.auth.models import User


class CustomUser(models.Model):
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
    user = models.OneToOneField(
        User, on_delete=models.CASCADE, null=True, blank=True)
    phone = models.CharField(max_length=10)
    profile_pic = models.ImageField(
        upload_to='service_images/', default='service_images/default.png')


class Service(models.Model):
    '''
    user: User,
    image: string,
    title: string,
    location: string,
    pricing: decimal,
    rating service: float between 0 and 5,
    description: string,
    category: Category,
    date posted: date,
    time: time,
    active: boolean
    '''
    options = [
        ('automotive', 'automotive'),
        ('arts', 'arts'),
        ('beauty', 'beauty'),
        ('cleaning', 'cleaning'),
        ('clothing', 'clothing'),
        ('deliveries', 'deliveries'),
        ('miscellaneous', 'miscellaneous'),
        ('pets', 'pets'),
        ('all', 'all'),
    ]
    places = [
        ('utc', 'utc'),
        ('acc', 'acc'),
        ('campus', 'campus'),
        ('other', 'other'),
    ]
    user = models.ForeignKey(
        CustomUser, on_delete=models.CASCADE, null=True, blank=True, related_name='services')
    image = models.ImageField(upload_to='service_images/')
    title = models.CharField(max_length=30)
    location = models.CharField(choices=places, max_length=30)
    spec_location = models.CharField(max_length=30, null=True, blank=True)
    pricing = models.DecimalField(max_digits=10, decimal_places=2)
    description = models.TextField()
    category = models.CharField(choices=options, max_length=30)

    @property
    def user_name(self):
        return self.user.user.username


class Review(models.Model):
    '''
    user: User,
    service: Service,
    rating: decimal between 0 and 5,
    comment: string
    '''
    user = models.ForeignKey(
        CustomUser, on_delete=models.CASCADE, related_name='reviews')
    service = models.ForeignKey(
        Service, on_delete=models.CASCADE, related_name='ratings')
    rating = models.DecimalField(max_digits=2, decimal_places=1,
                                 validators=[MinValueValidator(0), MaxValueValidator(5)])
    comment = models.TextField()

    @property
    def user_name(self):
        return self.user.user.username

    class Meta:
        unique_together = (('user', 'service'), )
        index_together = (('user', 'service'), )
