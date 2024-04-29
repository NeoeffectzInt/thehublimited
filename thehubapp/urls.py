from . import views
from django.urls import path



urlpatterns = [
    path('', views.home, name = 'home' ),
    path('about/', views.about_us, name = 'about' ),
    path('order-fullfilment/', views.solution, name = 'solution1' ),
    path('global-product-distribution/', views.solution_2, name = 'solution2' ),
    path('flexible-storage/', views.solution_3, name = 'solution3' ),
    path('consolidation/', views.solution_4, name = 'solution4' ),
    path('consulting/', views.solution_5, name = 'solution5' ),
    path('signin/', views.signin, name = 'signin' ),
    path('register/', views.register, name = 'register' ),
]