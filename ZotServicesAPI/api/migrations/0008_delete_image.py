# Generated by Django 4.2.7 on 2023-11-17 21:23

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0007_alter_customuser_profile_pic'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Image',
        ),
    ]