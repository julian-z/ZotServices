# Generated by Django 4.2.7 on 2023-11-17 16:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0005_remove_customuser_email_remove_customuser_first_name_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='Image',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image_file', models.ImageField(upload_to='')),
            ],
        ),
    ]
