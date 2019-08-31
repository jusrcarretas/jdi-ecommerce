from rest_framework import mixins, viewsets
from .models import Category, Product, Review
from .serializers import CategorySerializer, ProductSerializer, ReviewSerializer


# Create your viewsets here.


class CategoryViewSet(mixins.ListModelMixin, viewsets.GenericViewSet):
    """
    A Viewset for Categories that would:
        - List all categories
    """
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
