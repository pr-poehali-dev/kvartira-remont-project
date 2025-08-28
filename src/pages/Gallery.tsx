import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Icon from "@/components/ui/icon"

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("Все")
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const categories = ["Все", "Кухни", "Ванные", "Комнаты", "Офисы", "Коммерческие"]

  const galleryItems = [
    {
      id: 1,
      title: "Современная кухня-гостиная",
      category: "Кухни",
      image: "/img/0670e996-9080-4b02-b7e3-19f539aa5f68.jpg",
      description: "Объединенное пространство кухни и гостиной с островом",
      area: "45 м²",
      duration: "3 недели"
    },
    {
      id: 2,
      title: "Премиальная ванная комната",
      category: "Ванные",
      image: "/img/c5385438-1432-4516-8530-50d024f2db91.jpg",
      description: "Ванная с натуральным камнем и системой теплого пола",
      area: "12 м²",
      duration: "2 недели"
    },
    {
      id: 3,
      title: "Уютная гостиная",
      category: "Комнаты",
      image: "/img/f4ed60ef-f83d-4d9b-bab3-40dafbddcbe8.jpg",
      description: "Гостиная в современном стиле с камином",
      area: "35 м²",
      duration: "2.5 недели"
    },
    {
      id: 4,
      title: "Современный офис",
      category: "Офисы",
      image: "/img/a914bea9-0909-4bed-bf53-381cd7ffbf2b.jpg",
      description: "Офис с зонированием и современной мебелью",
      area: "120 м²",
      duration: "6 недель"
    },
    {
      id: 5,
      title: "Спальня мастер-класса",
      category: "Комнаты",
      image: "/img/cf660ba4-1a61-46e4-a214-7f0e33bc3077.jpg",
      description: "Спальня с гардеробной и рабочей зоной",
      area: "28 м²",
      duration: "3 недели"
    },
    {
      id: 6,
      title: "Ресторан премиум-класса",
      category: "Коммерческие",
      image: "/img/91afd8d1-508a-4a0a-a243-0a6715b7a32d.jpg",
      description: "Полная реконструкция ресторана с открытой кухней",
      area: "200 м²",
      duration: "8 недель"
    }
  ]

  const filteredItems = selectedCategory === "Все" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory)

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Icon name="HardHat" size={32} className="text-primary" />
            <h1 className="text-2xl font-bold text-secondary">СтройРемонт</h1>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-secondary hover:text-primary transition-colors">Главная</a>
            <a href="/gallery" className="text-primary font-medium">Фотогалерея</a>
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
      <section className="bg-gradient-to-br from-accent to-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-secondary mb-6">
            Фотогалерея наших работ
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Более 500 завершенных проектов различной сложности. 
            Каждая работа выполнена с любовью к деталям и профессиональным мастерством.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category 
                  ? "bg-primary hover:bg-primary/90 text-white" 
                  : "border-secondary text-secondary hover:bg-secondary hover:text-white"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <Card key={item.id} className="overflow-hidden hover:shadow-2xl transition-all duration-300 group">
                <div className="relative overflow-hidden cursor-pointer" onClick={() => setSelectedImage(item.image)}>
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button size="sm" className="bg-white/20 backdrop-blur-sm text-white border border-white/30">
                      <Icon name="ZoomIn" size={16} className="mr-2" />
                      Увеличить
                    </Button>
                  </div>
                  <Badge className="absolute top-4 left-4 bg-primary text-white">
                    {item.category}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-secondary mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <div className="flex items-center">
                      <Icon name="Home" size={16} className="mr-1" />
                      {item.area}
                    </div>
                    <div className="flex items-center">
                      <Icon name="Clock" size={16} className="mr-1" />
                      {item.duration}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <p className="text-gray-300">Завершенных проектов</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">14</div>
              <p className="text-gray-300">Лет опыта</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <p className="text-gray-300">Довольных клиентов</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">3</div>
              <p className="text-gray-300">Года гарантии</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-accent to-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-secondary mb-6">
            Готовы создать такой же проект?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Обсудим ваши идеи и создадим индивидуальный проект, 
            который превзойдет все ожидания
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              <Icon name="Calculator" size={20} className="mr-2" />
              Рассчитать стоимость
            </Button>
            <Button size="lg" variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-white">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Получить консультацию
            </Button>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh]">
            <img 
              src={selectedImage} 
              alt="Увеличенное изображение"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <Button
              size="sm"
              variant="outline"
              className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20"
              onClick={() => setSelectedImage(null)}
            >
              <Icon name="X" size={16} />
            </Button>
          </div>
        </div>
      )}

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
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Навигация</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/" className="hover:text-white cursor-pointer transition-colors">Главная</a></li>
                <li><a href="/gallery" className="hover:text-white cursor-pointer transition-colors">Фотогалерея</a></li>
                <li><a href="#services" className="hover:text-white cursor-pointer transition-colors">Услуги</a></li>
                <li><a href="#contact" className="hover:text-white cursor-pointer transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-400">
                <li>+7 (999) 123-45-67</li>
                <li>info@stroyremont.ru</li>
                <li>Пн-Пт: 9:00-18:00</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Социальные сети</h4>
              <div className="flex space-x-4">
                <Icon name="Facebook" size={20} className="text-gray-400 hover:text-primary cursor-pointer transition-colors" />
                <Icon name="Instagram" size={20} className="text-gray-400 hover:text-primary cursor-pointer transition-colors" />
                <Icon name="MessageCircle" size={20} className="text-gray-400 hover:text-primary cursor-pointer transition-colors" />
              </div>
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

export default Gallery