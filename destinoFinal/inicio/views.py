from django.shortcuts import render

# Create your views here.

def index(request):
  return render(request, 'inicio/index.html')


def servicios(request):
  return render(request, 'inicio/servicios.html')


def acerca(request):
  return render(request, 'inicio/acercaDeNosotros.html')


def contacto(request):
  return render(request, 'inicio/contacto.html')