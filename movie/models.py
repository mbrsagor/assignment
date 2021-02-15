from django.db import models


class Movie(models.Model):
    title = models.CharField(max_length=70)
    released = models.DateField()
    genre = models.CharField(max_length=100, blank=True)

    def __str__(self):
        return self.title[:30]
