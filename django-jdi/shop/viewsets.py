from rest_framework import mixins, viewsets
from django_filters.rest_framework import DjangoFilterBackend
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


class ReviewViewSet(mixins.ListModelMixin, mixins.CreateModelMixin, mixins.RetrieveModelMixin,
                    mixins.UpdateModelMixin, viewsets.GenericViewSet):
    """
    A Viewset for Reviews that would:
        - List reviews
        - Filter all reviews by product
        - Create a review
        - Retrieve a review by id
        - Update a review by id
    """
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer

    # For filtering via category
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['product', ]

    # For retrieve and update
    lookup_field = 'id'
