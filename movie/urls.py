from django.urls import path
from .views import MovieViewSet, CustomJWTView
from rest_framework.routers import DefaultRouter

router = DefaultRouter()

router.register('movie', MovieViewSet)


urlpatterns = [
    path('login/', CustomJWTView.as_view(), name='login'),
] + router.urls
