from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import CategoryViewSet

# Create your local urls here.


# Register viewsets to a router
router = DefaultRouter()
router.register(r'categories', CategoryViewSet)

app_name = 'shop'
urlpatterns = [
    path('api/', include(router.urls)),
]
