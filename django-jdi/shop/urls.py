from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import CategoryViewSet, ProductViewSet, ReviewViewSet, ShortProductViewSet

# Create your local urls here.


# Register viewsets to a router
router = DefaultRouter()
router.register(r'categories', CategoryViewSet)
router.register(r'products', ProductViewSet)
router.register(r'reviews', ReviewViewSet)
# Add additional property 'base_name' to differentiate endpoints with same model use
router.register(r'summary/products', ShortProductViewSet, base_name='summary-products')

app_name = 'shop'
urlpatterns = [
    path('api/', include(router.urls)),
]
