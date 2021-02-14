from .views import MovieViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()

router.register('movie', MovieViewSet)

urlpatterns = router.urls
