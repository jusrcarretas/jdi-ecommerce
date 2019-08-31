from django.db import models

# Create your models here.


class Category(models.Model):
    # Details
    name = models.CharField(max_length=100, verbose_name='Category Name', unique=True)
    description = models.TextField(verbose_name='Category Description')

    def __str__(self):
        return self.name


class Product(models.Model):
    # Details
    name = models.CharField(max_length=100, verbose_name='Product Name')
    price = models.FloatField(verbose_name='Price')
    currency = models.CharField(max_length=20, verbose_name='Currency', default='Php')
    quantity = models.IntegerField(verbose_name='Quantity')
    short_description = models.TextField(verbose_name='Short Description')
    long_description = models.TextField(verbose_name='Long Description')
    image = models.TextField(verbose_name='Image URL')

    # Relationships
    category = models.ForeignKey(Category, related_name='category_products',
                                 verbose_name='Category', on_delete=models.CASCADE)

    # Availability
    active = models.BooleanField(verbose_name='Is Active', default=True)

    def __str__(self):
        return self.name
