from rest_framework import mixins, viewsets
from .models import Category, Product
from .serializers import CategorySerializer, ProductSerializer


# Create your viewsets here.


class CategoryViewSet(mixins.ListModelMixin, viewsets.GenericViewSet):
    """
    A Viewset for Categories that would:
        - List all categories
    """
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class ProductViewSet(mixins.ListModelMixin, mixins.RetrieveModelMixin, viewsets.GenericViewSet):
    """
    A Viewset for Products that would:
        - List all products
        - Retrieve product by id
    """
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

    # For retrieve
    lookup_field = 'id'
