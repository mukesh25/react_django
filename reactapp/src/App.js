import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    return ( 
        <div className="App">

        <div className="center-column">

       
          <div className="item-row">
            <span>Create Django Project: "django-admin startproject projectname"</span>
            <p> Here project name is todo </p>
          </div>

          <div className="item-row">
            <span>Create React app: "npx create-react-app appname"</span>
            <p> Here app name is reactapp </p>
          </div>

          <div className="item-row">
            <span>Drag react app into root directory of django project</span>
          </div>

          <div className="item-row">
            <span>Configure TEMPALTES engine</span>
            <p> 'DIRS': [ os.path.join(BASE_DIR, 'reactapp/build'),] </p>
            
          </div>

          <div className="item-row">
            <span>Configure URL path</span>
            <p>from django.views.generic import TemplateView </p>
            <p>
            urlpatterns = [
                 path('', TemplateView.as_view(template_name='index.html')),
            ]
            </p>
          </div>

          <div className="item-row">
            <span>Configure static files</span>
            <p> STATICFILES_DIRS = [ os.path.join(BASE_DIR, 'reactapp/build/static'), ]</p>
          </div>

          <div className="item-row">
            <span>cd into react app and run "npm run build"</span>
          </div>

        </div>
     
    </div>
    );
}

export default App;