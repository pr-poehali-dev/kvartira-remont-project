import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Icon from "@/components/ui/icon"

const Index = () => {
  const portfolioProjects = [
    {
      id: 1,
      title: "Современная кухня",
      description: "Полная реконструкция кухни с современным дизайном",
      image: "/img/0670e996-9080-4b02-b7e3-19f539aa5f68.jpg",
      category: "Кухни"
    },
    {
      id: 2,
      title: "Ванная комната",
      description: "Элитный ремонт ванной с премиальной плиткой",
      image: "/img/c5385438-1432-4516-8530-50d024f2db91.jpg",
      category: "Ванные"
    },
    {
      id: 3,
      title: "Гостиная",
      description: "Дизайнерский ремонт с встроенной мебелью",
      image: "/img/f4ed60ef-f83d-4d9b-bab3-40dafbddcbe8.jpg",
      category: "Комнаты"
    }
  ]

  const testimonials = [
    {
      id: 1,
      name: "Анна Петрова",
      rating: 5,
      text: "Превосходная работа! Команда выполнила ремонт точно в срок и с отличным качеством.",
      project: "Ремонт квартиры 85 м²"
    },
    {
      id: 2,
      name: "Михаил Иванов",
      rating: 5,
      text: "Профессиональный подход к каждой детали. Рекомендую всем друзьям!",
      project: "Кухня под ключ"
    },
    {
      id: 3,
      name: "Елена Сидорова",
      rating: 5,
      text: "Отличное соотношение цена-качество. Очень довольны результатом.",
      project: "Ванная комната"
    }
  ]

  const services = [
    {
      icon: "Hammer",
      title: "Капитальный ремонт",
      description: "Полная реконструкция жилых и коммерческих помещений"
    },
    {
      icon: "PaintBucket",
      title: "Отделочные работы",
      description: "Качественная отделка стен, потолков и полов"
    },
    {
      icon: "Wrench",
      title: "Сантехника и электрика",
      description: "Монтаж и ремонт инженерных коммуникаций"
    },
    {
      icon: "Home",
      title: "Дизайн интерьера",
      description: "Создание уникального дизайна для вашего дома"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Icon name="HardHat" size={32} className="text-primary" />
            <h1 className="text-2xl font-bold text-secondary">СтройРемонт</h1>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-primary font-medium">Главная</a>
            <a href="/gallery" className="text-secondary hover:text-primary transition-colors">Фотогалерея</a>
            <a href="#services" className="text-secondary hover:text-primary transition-colors">Услуги</a>
            <a href="#contact" className="text-secondary hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button className="bg-primary hover:bg-primary/90">
            <Icon name="Phone" size={16} className="mr-2" />
            Заказать звонок
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-accent to-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-primary/10 text-primary mb-4">
                Профессиональный ремонт
              </Badge>
              <h1 className="text-5xl font-bold text-secondary mb-6 leading-tight">
                Качественный ремонт
                <span className="text-primary"> под ключ</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Более 500 успешно завершенных проектов. Гарантия качества, соблюдение сроков и индивидуальный подход к каждому клиенту.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  <Icon name="Calculator" size={20} className="mr-2" />
                  Рассчитать стоимость
                </Button>
                <Button size="lg" variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-white">
                  <Icon name="Eye" size={20} className="mr-2" />
                  Посмотреть работы
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-primary/10 rounded-3xl p-8">
                <img 
                  src="/img/0670e996-9080-4b02-b7e3-19f539aa5f68.jpg" 
                  alt="Современный ремонт квартиры"
                  className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-secondary mb-4">Наши услуги</h2>
            <p className="text-lg text-gray-600">Полный спектр строительных и ремонтных работ</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow bg-white">
                <CardContent className="p-6 text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={service.icon as any} size={32} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-secondary mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-secondary mb-4">Наше портфолио</h2>
            <p className="text-lg text-gray-600">Лучшие примеры наших работ</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 left-4 bg-primary text-white">
                    {project.category}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-secondary mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-white">
                    Подробнее
                    <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="reviews" className="py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-secondary mb-4">Отзывы клиентов</h2>
            <p className="text-lg text-gray-600">Что говорят о нашей работе</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="bg-white">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-secondary">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.project}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Готовы начать ваш проект?</h2>
              <p className="text-lg mb-8 text-gray-200">
                Свяжитесь с нами для бесплатной консультации и расчета стоимости работ
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Icon name="Phone" size={24} className="text-primary mr-4" />
                  <span className="text-lg">+7 (999) 123-45-67</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Mail" size={24} className="text-primary mr-4" />
                  <span className="text-lg">info@stroyremont.ru</span>
                </div>
                <div className="flex items-center">
                  <Icon name="MapPin" size={24} className="text-primary mr-4" />
                  <span className="text-lg">Москва, ул. Строителей, 15</span>
                </div>
              </div>
            </div>
            <Card className="bg-white/10 border-white/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-white">Оставить заявку</h3>
                <form className="space-y-6">
                  <div>
                    <input 
                      type="text" 
                      placeholder="Ваше имя" 
                      className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:border-primary"
                    />
                  </div>
                  <div>
                    <input 
                      type="tel" 
                      placeholder="Телефон" 
                      className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:border-primary"
                    />
                  </div>
                  <div>
                    <textarea 
                      placeholder="Описание проекта" 
                      rows={4}
                      className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:border-primary resize-none"
                    ></textarea>
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    Отправить заявку
                    <Icon name="Send" size={16} className="ml-2" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="HardHat" size={28} className="text-primary" />
                <h3 className="text-xl font-bold">СтройРемонт</h3>
              </div>
              <p className="text-gray-400 mb-4">
                Профессиональный ремонт и строительство с 2010 года
              </p>
              <div className="flex space-x-4">
                <Icon name="Facebook" size={20} className="text-gray-400 hover:text-primary cursor-pointer transition-colors" />
                <Icon name="Instagram" size={20} className="text-gray-400 hover:text-primary cursor-pointer transition-colors" />
                <Icon name="MessageCircle" size={20} className="text-gray-400 hover:text-primary cursor-pointer transition-colors" />
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-white cursor-pointer transition-colors">Капитальный ремонт</li>
                <li className="hover:text-white cursor-pointer transition-colors">Отделочные работы</li>
                <li className="hover:text-white cursor-pointer transition-colors">Дизайн интерьера</li>
                <li className="hover:text-white cursor-pointer transition-colors">Сантехника</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-400">
                <li>+7 (999) 123-45-67</li>
                <li>info@stroyremont.ru</li>
                <li>Пн-Пт: 9:00-18:00</li>
                <li>Сб-Вс: 10:00-16:00</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Гарантии</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center">
                  <Icon name="Check" size={16} className="text-primary mr-2" />
                  Гарантия 3 года
                </li>
                <li className="flex items-center">
                  <Icon name="Check" size={16} className="text-primary mr-2" />
                  Договор с фиксированной ценой
                </li>
                <li className="flex items-center">
                  <Icon name="Check" size={16} className="text-primary mr-2" />
                  Соблюдение сроков
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 СтройРемонт. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Index