from rest_framework import serializers
from .models import Category, Product, Review

# Create your serializers here.


class CategorySerializer(serializers.ModelSerializer):
    """Serializer for displaying full category details"""
    class Meta:
        model = Category
        fields = '__all__


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
