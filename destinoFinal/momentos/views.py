from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from .models import Momento
from django.shortcuts import redirect

# Create your views here.
@login_required
def index(request):
  return render(request, 'momentos/index.html')

def save_momento(request):
  if request.method == 'POST':
    user_id = request.user.id
    title = request.POST['titulo']
    content = request.POST['contenidoMomento']
    lat = request.POST['latHidden']
    lng = request.POST['lngHidden']
    if title !='':
      if content !='':
        m = Momento(title=title, content=content, lat=lat, lng=lng, user_id_id=user_id)
        m.save()
        return redirect('home')