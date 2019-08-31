from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator

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


class Review(models.Model):
    # Details
    title = models.CharField(max_length=100, verbose_name='Review Title')
    comment = models.TextField(verbose_name='Comment')
    rating = models.PositiveIntegerField(validators=[MinValueValidator(1), MaxValueValidator(5)],
                                         verbose_name='Rating')

    # Denormalized
    # Instead of creating a separate model for votes,
    # it is directly embedded into the review model
    vote_count = models.PositiveIntegerField(verbose_name='Votes', default=0)

    # Relationships
    product = models.ForeignKey(Product, related_name='product_reviews',
                                verbose_name='Product', on_delete=models.CASCADE)

    # Auto fields
    date_created = models.DateTimeField(auto_now_add=True)

    class Meta:
        # Add ordering meta based on vote_count
        # Set ordering to negative to display from highest to lowest votes
        ordering = ['-vote_count']

    def __str__(self):
        return self.title
