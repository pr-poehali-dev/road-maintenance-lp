import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const services = [
    {
      icon: "Construction",
      title: "Укладка асфальта",
      description: "Профессиональное асфальтирование дорог, тротуаров и парковок с использованием современного оборудования",
      image: "https://cdn.poehali.dev/projects/d22741cb-6a21-4a41-af69-76e73ff0193b/files/305aacc1-9ac4-4b9f-9b3d-1d5e657a4811.jpg"
    },
    {
      icon: "Truck",
      title: "Вывоз строительного мусора",
      description: "Быстрый и надежный вывоз строительных отходов любого объема. Работаем круглосуточно",
      image: "https://cdn.poehali.dev/projects/d22741cb-6a21-4a41-af69-76e73ff0193b/files/9af7ab3a-173c-44cb-916e-a74470a0619f.jpg"
    },
    {
      icon: "CircleParking",
      title: "Аренда спецтехники",
      description: "Широкий выбор дорожной техники: экскаваторы, катки, погрузчики. Гибкие условия аренды",
      image: "https://cdn.poehali.dev/projects/d22741cb-6a21-4a41-af69-76e73ff0193b/files/762820e2-9038-44d3-8818-31c6ef41ebc4.jpg"
    }
  ];

  const projects = [
    { name: "Магистраль М-11", area: "15 км", year: "2024" },
    { name: "ЖК Новая высота", area: "8500 м²", year: "2024" },
    { name: "Торговый центр Авеню", area: "12000 м²", year: "2023" },
    { name: "Промзона Север", area: "25 км", year: "2023" }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-border z-50">
        <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Construction" size={28} className="text-primary" />
            <span className="text-xl font-bold text-secondary">РосДорСтрой</span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection('services')} className="text-foreground hover:text-primary transition-colors">
              Услуги
            </button>
            <button onClick={() => scrollToSection('projects')} className="text-foreground hover:text-primary transition-colors">
              Проекты
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-foreground hover:text-primary transition-colors">
              Контакты
            </button>
            <Button onClick={() => scrollToSection('contact')}>
              Заказать звонок
            </Button>
          </div>
        </nav>
      </header>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold text-secondary mb-6 leading-tight">
                Дорожное строительство под ключ
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Качественная укладка асфальта, вывоз мусора и аренда спецтехники. 
                Работаем с 2010 года. Гарантия на все виды работ.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" onClick={() => scrollToSection('contact')} className="text-lg">
                  Получить консультацию
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('services')}>
                  Наши услуги
                </Button>
              </div>
              <div className="mt-12 grid grid-cols-3 gap-6">
                <div>
                  <div className="text-3xl font-bold text-primary mb-1">500+</div>
                  <div className="text-sm text-muted-foreground">Проектов</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-1">14</div>
                  <div className="text-sm text-muted-foreground">Лет опыта</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-1">50+</div>
                  <div className="text-sm text-muted-foreground">Единиц техники</div>
                </div>
              </div>
            </div>
            <div className="animate-fade-in">
              <img 
                src="https://cdn.poehali.dev/projects/d22741cb-6a21-4a41-af69-76e73ff0193b/files/762820e2-9038-44d3-8818-31c6ef41ebc4.jpg" 
                alt="Дорожная техника" 
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary mb-4">Наши услуги</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Полный спектр дорожно-строительных работ с современным оборудованием
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={service.icon as any} size={24} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-secondary mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <Button variant="link" className="p-0 h-auto text-primary">
                    Подробнее <Icon name="ArrowRight" size={16} className="ml-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary mb-4">Выполненные проекты</h2>
            <p className="text-lg text-muted-foreground">
              География наших работ охватывает всю Московскую область
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-secondary">{project.name}</h3>
                    <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
                      {project.year}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Icon name="MapPin" size={16} />
                    <span>Площадь работ: {project.area}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-secondary text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Свяжитесь с нами</h2>
              <p className="text-lg mb-8 opacity-90">
                Оставьте заявку, и наш специалист свяжется с вами в течение 15 минут
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <Icon name="Phone" size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="text-sm opacity-75">Телефон</div>
                    <div className="font-semibold text-lg">+7 (495) 123-45-67</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <Icon name="Mail" size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="text-sm opacity-75">Email</div>
                    <div className="font-semibold">info@rosdorstroy.ru</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <Icon name="MapPin" size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="text-sm opacity-75">Адрес</div>
                    <div className="font-semibold">г. Москва, ул. Строительная, 15</div>
                  </div>
                </div>
              </div>
            </div>
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-secondary mb-6">Заказать обратный звонок</h3>
                <form className="space-y-4">
                  <div>
                    <input 
                      type="text" 
                      placeholder="Ваше имя"
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <input 
                      type="tel" 
                      placeholder="Телефон"
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <textarea 
                      placeholder="Комментарий"
                      rows={4}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full">
                    Отправить заявку
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Icon name="Construction" size={24} className="text-primary" />
              <span className="font-bold text-secondary">РосДорСтрой</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 РосДорСтрой. Все права защищены
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
