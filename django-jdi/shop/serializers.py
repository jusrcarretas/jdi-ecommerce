from rest_framework import serializers
from django.db.models import Avg
from .models import Category, Product, Review

# Create your serializers here.


class CategorySerializer(serializers.ModelSerializer):
    """Serializer for displaying full category details"""
    class Meta:
        model = Category
        fields = '__all__'


class ProductSerializer(serializers.ModelSerializer):
    """Serializer for displaying full product details"""
    class Meta:
        model = Product
        fields = '__all__'


class ReviewSerializer(serializers.ModelSerializer):
    """Serializer for displaying full review details"""
    class Meta:
        model = Review
        fields = '__all__'


class ShortProductSerializer(serializers.ModelSerializer):
    """
    Serializer for displaying summarized product catalogs

    This serializer is made to increase frontend
    loading time and to provide calculated data.
    """
    # Declare calculated field using SerializerMethodField
    average_rating = serializers.SerializerMethodField()

    class Meta:
        model = Product
        fields = ['id', 'name', 'price', 'category', 'currency', 'average_rating', 'image']

    def get_average_rating(self, obj):
        """
        The value returned by this function would be used
        to render the Rate antd component in the frountend
        """
        # Get average rating based on reviews attached to the current Product
        average = obj.product_reviews.aggregate(Avg('rating'))['rating__avg']

        # Return average if there are reviews. Zero if there are none
        if average:
            return average
        else:
            return 0
