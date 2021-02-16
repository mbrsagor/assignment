from django.urls import path
from .views import MovieViewSet, CustomJWTView #api_view
from rest_framework.routers import DefaultRouter

router = DefaultRouter()

router.register('movie', MovieViewSet)


urlpatterns = [
    path('login/', CustomJWTView.as_view(), name='login'),
    # path('data/', api_view, name='data'),
] + router.urls
