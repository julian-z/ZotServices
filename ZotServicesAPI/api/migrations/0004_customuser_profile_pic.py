# Generated by Django 4.2.7 on 2023-11-17 15:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_remove_review_customuser_remove_service_customuser_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='customuser',
            name='profile_pic',
            field=models.ImageField(default='profile_images/default.png', upload_to='profile_images/'),
        ),
    ]
