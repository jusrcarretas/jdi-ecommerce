from django.db import models

# Create your models here.


class Category(models.Model):
    # Details
    name = models.CharField(max_length=100, verbose_name='Category Name', unique=True)
    description = models.TextField(verbose_name='Category Description')

    def __str__(self):
        return self.name
