from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAuthenticated
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework_simplejwt.views import TokenObtainPairView

from rest_framework.response import Response
import requests

from .models import Movie
from .serializers import MovieSerializer, TokenObtainTokenSerializer


class MovieViewSet(ModelViewSet):
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['title', 'released', 'genre']
    permission_classes = [IsAuthenticated, ]


class CustomJWTView(TokenObtainPairView):
    serializer_class = TokenObtainTokenSerializer


# def api_view(request):
#     external_api_url = 'http://www.omdbapi.com/?apikey=d65dad86&s=batman'
#     data = request.POST
#     res = requests.post(external_api_url, data)
#     return Response(res.json())
