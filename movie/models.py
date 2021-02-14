# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models


class Movie(models.Model):
    title = models.CharField(max_length=70)
    release_year = models.DateField()

    def __str__(self):
        return self.title[:30]
