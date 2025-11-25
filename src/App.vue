<template>
  <div id="app">
    <nav class="navbar">
      <div class="nav-container">
        <h1 class="logo">🏛️ الأردن - جنة السياحة</h1>
        <ul class="nav-menu">
          <li><router-link to="/">الرئيسية</router-link></li>
          <li><router-link to="/recreational">السياحة الاستجمامية</router-link></li>
          <li><router-link to="/therapeutic">السياحة العلاجية</router-link></li>
          <li><router-link to="/educational">السياحة التعليمية</router-link></li>
          <li><router-link to="/entertainment">السياحة الترفيهية</router-link></li>
          <li><router-link to="/foods">الأكلات الأردنية</router-link></li>
          <li><router-link to="/sites">الأماكن السياحية</router-link></li>
        </ul>
      </div>
    </nav>
    
    <main>
      <router-view />
    </main>
    
    <footer class="footer">
      <p>تصميم وإعداد - الطالب: اوس عماد الحاسي</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
// App component
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  direction: rtl;
  text-align: right;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.navbar {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 1rem 0;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
}

.nav-menu {
  display: flex;
  list-style: none;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.nav-menu a {
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  transition: background 0.3s;
}

.nav-menu a:hover,
.nav-menu a.router-link-active {
  background: rgba(255,255,255,0.2);
}

main {
  flex: 1;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 2rem;
}

.footer {
  background: #2c3e50;
  color: white;
  text-align: center;
  padding: 1.5rem;
  margin-top: auto;
}

@media (max-width: 768px) {
  .nav-container {
    flex-direction: column;
    gap: 1rem;
  }
  
  .nav-menu {
    justify-content: center;
  }
}
</style>
