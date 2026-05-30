"use client"

import { useState } from "react"
import { X, Plus, Minus, ShoppingCart, Trash2, User, CreditCard, Send, Fish, Utensils, Sandwich, Wine, Beer, Coffee, GlassWater, ArrowLeft } from "lucide-react"

const categories = [
  { id: "frutos", label: "Frutos do Mar", icon: Fish },
  { id: "porcoes", label: "Porções", icon: Utensils },
  { id: "lanches", label: "Lanches", icon: Sandwich },
  { id: "drinks", label: "Drinks", icon: Wine },
  { id: "cervejas", label: "Cervejas", icon: Beer },
  { id: "bebidas", label: "Bebidas", icon: GlassWater },
]

const menuItems: Record<string, Array<{name: string, description: string, price: number, priceFormatted: string}>> = {
  frutos: [
    { name: "Camarão à Milanesa M", description: "500g de camarão empanado", price: 65, priceFormatted: "R$ 65,00" },
    { name: "Camarão à Milanesa G", description: "1kg de camarão empanado", price: 110, priceFormatted: "R$ 110,00" },
    { name: "Camarão Completo M", description: "500g de camarão, fritas, arroz branco e à grega", price: 105, priceFormatted: "R$ 105,00" },
    { name: "Camarão Completo G", description: "1kg de camarão, fritas, arroz branco e à grega", price: 160, priceFormatted: "R$ 160,00" },
    { name: "Isca de Tilápia M", description: "500g de tilápia empanada", price: 45, priceFormatted: "R$ 45,00" },
    { name: "Isca de Tilápia G", description: "1kg de tilápia empanada", price: 80, priceFormatted: "R$ 80,00" },
    { name: "Lula à Milanesa M", description: "500g de lula empanada", price: 50, priceFormatted: "R$ 50,00" },
    { name: "Lula à Milanesa G", description: "1kg de lula empanada", price: 80, priceFormatted: "R$ 80,00" },
    { name: "Tábua Floripa", description: "Camarão, tilápia, lula à milanesa, marisco e fritas", price: 145, priceFormatted: "R$ 145,00" },
    { name: "Tábua de Carne", description: "Picanha, fraldinha, linguiça, coração, queijo coalho e fritas", price: 145, priceFormatted: "R$ 145,00" },
    { name: "Casquinha de Siri", description: "Unidade", price: 8, priceFormatted: "R$ 8,00" },
    { name: "Bolinho de Siri", description: "Porção com 8 unidades", price: 30, priceFormatted: "R$ 30,00" },
    { name: "Camarão à Parmegiana", description: "Com arroz e fritas", price: 100, priceFormatted: "R$ 100,00" },
  ],
  porcoes: [
    { name: "Fritas M", description: "450g de batata frita", price: 25, priceFormatted: "R$ 25,00" },
    { name: "Fritas G", description: "800g de batata frita", price: 30, priceFormatted: "R$ 30,00" },
    { name: "Fritas com Bacon e Cheddar M", description: "500g", price: 35, priceFormatted: "R$ 35,00" },
    { name: "Fritas com Bacon e Cheddar G", description: "1kg", price: 50, priceFormatted: "R$ 50,00" },
    { name: "Isca de Carne M", description: "500g de isca bovina", price: 40, priceFormatted: "R$ 40,00" },
    { name: "Isca de Carne G", description: "1kg de isca bovina", price: 60, priceFormatted: "R$ 60,00" },
    { name: "Isca de Frango", description: "Frango em cubos empanados", price: 35, priceFormatted: "R$ 35,00" },
    { name: "Porção de Frios", description: "Queijo, presunto, calabresa, ovo de codorna e azeitona", price: 25, priceFormatted: "R$ 25,00" },
    { name: "Anéis de Cebola", description: "400g de anéis empanados", price: 25, priceFormatted: "R$ 25,00" },
    { name: "Tábua de Carne M", description: "Bovina, frango, coração, calabresa, salsicha e fritas", price: 120, priceFormatted: "R$ 120,00" },
    { name: "Tábua de Carne G", description: "Porção grande completa", price: 160, priceFormatted: "R$ 160,00" },
  ],
  lanches: [
    { name: "Misto Quente", description: "Pão, queijo e presunto", price: 16, priceFormatted: "R$ 16,00" },
    { name: "X-Burger", description: "Pão, hambúrguer, queijo e presunto", price: 18, priceFormatted: "R$ 18,00" },
    { name: "X-Salada", description: "Hambúrguer, queijo, presunto, alface, tomate e salada", price: 23, priceFormatted: "R$ 23,00" },
    { name: "X-Bacon", description: "Hambúrguer, bacon, queijo, presunto e salada", price: 26, priceFormatted: "R$ 26,00" },
    { name: "X-Calabresa", description: "Hambúrguer, calabresa, queijo, presunto e salada", price: 26, priceFormatted: "R$ 26,00" },
    { name: "X-Coração", description: "Hambúrguer, coração, queijo, presunto e salada", price: 26, priceFormatted: "R$ 26,00" },
    { name: "X-Floripa", description: "Hambúrguer, galinha, bacon, calabresa, queijo e salada", price: 30, priceFormatted: "R$ 30,00" },
    { name: "X-Camarão", description: "Camarão, queijo, alface, tomate e salada", price: 30, priceFormatted: "R$ 30,00" },
    { name: "Prensadão", description: "2 salsichas, queijo, tomate e salada", price: 28, priceFormatted: "R$ 28,00" },
  ],
  drinks: [
    { name: "Caipirinha de Cachaça", description: "Limão, cachaça e açúcar", price: 18, priceFormatted: "R$ 18,00" },
    { name: "Caipirinha de Vodka", description: "Limão, vodka e açúcar", price: 18, priceFormatted: "R$ 18,00" },
    { name: "Caipirinha de Morango", description: "Morango, cachaça e açúcar", price: 20, priceFormatted: "R$ 20,00" },
    { name: "Piña Colada", description: "Leite de coco, leite condensado, abacaxi e rum", price: 20, priceFormatted: "R$ 20,00" },
    { name: "Gin Tropical", description: "Gin, laranja e energético", price: 18, priceFormatted: "R$ 18,00" },
    { name: "Gin Tônica", description: "Gin e água tônica", price: 18, priceFormatted: "R$ 18,00" },
    { name: "Gin Morango", description: "Gin, morango, água tônica e açúcar", price: 20, priceFormatted: "R$ 20,00" },
    { name: "Espanhola", description: "Vinho tinto suave, abacaxi, leite condensado e gelo", price: 20, priceFormatted: "R$ 20,00" },
    { name: "Dose de Whisky", description: "Dose individual", price: 15, priceFormatted: "R$ 15,00" },
    { name: "Taça de Vinho", description: "Vinho tinto ou branco", price: 15, priceFormatted: "R$ 15,00" },
  ],
  cervejas: [
    { name: "Chopp 500ml", description: "Pilsen/Lager", price: 5, priceFormatted: "R$ 5,00" },
    { name: "Brahma 600ml", description: "Cerveja Pilsen", price: 13, priceFormatted: "R$ 13,00" },
    { name: "Skol 600ml", description: "Cerveja Pilsen", price: 13, priceFormatted: "R$ 13,00" },
    { name: "Original 600ml", description: "Cerveja Pilsen", price: 16, priceFormatted: "R$ 16,00" },
    { name: "Budweiser 600ml", description: "Cerveja American Lager", price: 16, priceFormatted: "R$ 16,00" },
    { name: "Heineken 600ml", description: "Cerveja Premium Lager", price: 18, priceFormatted: "R$ 18,00" },
    { name: "Eisenbahn 600ml", description: "Cerveja artesanal", price: 10, priceFormatted: "R$ 10,00" },
    { name: "Estrella Galícia 600ml", description: "Cerveja espanhola", price: 11, priceFormatted: "R$ 11,00" },
    { name: "Therezópolis 600ml", description: "Cerveja premium", price: 11, priceFormatted: "R$ 11,00" },
    { name: "Amstel", description: "Cerveja puro malte", price: 10, priceFormatted: "R$ 10,00" },
  ],
  bebidas: [
    { name: "Coca-Cola Lata", description: "350ml", price: 6, priceFormatted: "R$ 6,00" },
    { name: "Coca-Cola 600ml", description: "Garrafa", price: 8, priceFormatted: "R$ 8,00" },
    { name: "Coca-Cola 2L", description: "Garrafa", price: 14, priceFormatted: "R$ 14,00" },
    { name: "Guaraná Antarctica Lata", description: "350ml", price: 5, priceFormatted: "R$ 5,00" },
    { name: "Guaraná Antarctica 2L", description: "Garrafa", price: 12, priceFormatted: "R$ 12,00" },
    { name: "Fanta Laranja Lata", description: "350ml", price: 5, priceFormatted: "R$ 5,00" },
    { name: "Sprite Lata", description: "350ml", price: 5, priceFormatted: "R$ 5,00" },
    { name: "Água Mineral", description: "500ml", price: 4, priceFormatted: "R$ 4,00" },
    { name: "Água com Gás", description: "500ml", price: 5, priceFormatted: "R$ 5,00" },
    { name: "Suco Natural de Laranja", description: "300ml", price: 10, priceFormatted: "R$ 10,00" },
    { name: "Suco Natural de Limão", description: "300ml", price: 8, priceFormatted: "R$ 8,00" },
    { name: "Suco Natural de Maracujá", description: "300ml", price: 10, priceFormatted: "R$ 10,00" },
    { name: "Suco Natural de Abacaxi", description: "300ml", price: 10, priceFormatted: "R$ 10,00" },
    { name: "Energético Red Bull", description: "250ml", price: 15, priceFormatted: "R$ 15,00" },
    { name: "Energético Monster", description: "473ml", price: 14, priceFormatted: "R$ 14,00" },
    { name: "Café Expresso", description: "Xícara", price: 5, priceFormatted: "R$ 5,00" },
    { name: "Café com Leite", description: "Xícara", price: 6, priceFormatted: "R$ 6,00" },
    { name: "Cappuccino", description: "Xícara", price: 8, priceFormatted: "R$ 8,00" },
    { name: "Chá Gelado", description: "300ml", price: 6, priceFormatted: "R$ 6,00" },
  ],
}

type CartItem = {
  name: string
  price: number
  quantity: number
}

type OrderFormProps = {
  isOpen: boolean
  onClose: () => void
}

export function OrderForm({ isOpen, onClose }: OrderFormProps) {
  const [step, setStep] = useState<"menu" | "cart" | "checkout">("menu")
  const [activeCategory, setActiveCategory] = useState("frutos")
  const [cart, setCart] = useState<CartItem[]>([])
  const [customerName, setCustomerName] = useState("")
  const [customerPhone, setCustomerPhone] = useState("")
  const [paymentMethod, setPaymentMethod] = useState("")
  const [deliveryMethod, setDeliveryMethod] = useState("")
  const [customerAddress, setCustomerAddress] = useState("")
  const [observations, setObservations] = useState("")

  const addToCart = (item: { name: string; price: number }) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.name === item.name)
      if (existing) {
        return prev.map((i) =>
          i.name === item.name ? { ...i, quantity: i.quantity + 1 } : i
        )
      }
      return [...prev, { ...item, quantity: 1 }]
    })
  }

  const removeFromCart = (name: string) => {
    setCart((prev) => prev.filter((i) => i.name !== name))
  }

  const updateQuantity = (name: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((i) =>
          i.name === name ? { ...i, quantity: Math.max(0, i.quantity + delta) } : i
        )
        .filter((i) => i.quantity > 0)
    )
  }

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0)

  const formatCurrency = (value: number) => {
    return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
  }

  const sendToWhatsApp = () => {
    if (!customerName || !paymentMethod || !deliveryMethod || cart.length === 0) return

    const itemsList = cart
      .map((item) => `- ${item.quantity}x ${item.name} (${formatCurrency(item.price * item.quantity)})`)
      .join("\n")

    const message = `*NOVO PEDIDO - FLORIPA BAR*

*Cliente:* ${customerName}
${customerPhone ? `*Telefone:* ${customerPhone}` : ""}

*Tipo:* ${deliveryMethod === "retirada" ? "Retirada no Local" : "Entrega"}
${deliveryMethod === "entrega" && customerAddress ? `*Endereço:* ${customerAddress}` : ""}

*Itens do Pedido:*
${itemsList}

*TOTAL: ${formatCurrency(total)}*

*Forma de Pagamento:* ${paymentMethod}
${observations ? `\n*Observações:* ${observations}` : ""}

---
Pedido enviado pelo site`

    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/5548936224040?text=${encodedMessage}`, "_blank")
    
    // Reset form
    setCart([])
    setCustomerName("")
    setCustomerPhone("")
    setPaymentMethod("")
    setDeliveryMethod("")
    setCustomerAddress("")
    setObservations("")
    setStep("menu")
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-card rounded-2xl shadow-2xl overflow-hidden mx-4 border border-border/50">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border/40 bg-card">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/20 rounded-xl">
              <ShoppingCart className="w-5 h-5 text-primary" />
            </div>
            <h2 className="text-xl font-bold text-foreground">Fazer Pedido</h2>
          </div>
          <div className="flex items-center gap-4">
            {cartCount > 0 && (
              <button
                onClick={() => setStep(step === "menu" ? "cart" : "menu")}
                className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors shadow-md"
              >
                <ShoppingCart className="w-4 h-4" />
                <span>{cartCount}</span>
                <span className="font-bold">{formatCurrency(total)}</span>
              </button>
            )}
            <button
              onClick={onClose}
              className="p-2 hover:bg-foreground/10 rounded-full transition-colors"
            >
              <X className="w-6 h-6 text-foreground/70" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="overflow-y-auto max-h-[calc(90vh-140px)] bg-background/50">
          {step === "menu" && (
            <div className="p-5">
              {/* Category Tabs */}
              <div className="flex flex-wrap gap-2 mb-6 pb-4 border-b border-border/30">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium transition-all text-sm ${
                      activeCategory === category.id
                        ? "bg-primary text-primary-foreground shadow-md"
                        : "bg-card text-foreground/70 hover:bg-card/80 hover:text-foreground border border-border/30"
                    }`}
                  >
                    <category.icon size={18} />
                    <span className="hidden sm:inline">{category.label}</span>
                  </button>
                ))}
              </div>

              {/* Menu Items */}
              <div className="grid gap-3">
                {menuItems[activeCategory]?.map((item, index) => {
                  const cartItem = cart.find((i) => i.name === item.name)
                  return (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 bg-card rounded-xl border border-border/40 hover:border-primary/40 hover:shadow-md transition-all"
                    >
                      <div className="flex-1 mr-4">
                        <h3 className="font-bold text-foreground text-sm">{item.name}</h3>
                        <p className="text-foreground/50 text-xs mt-1">{item.description}</p>
                        <span className="text-primary font-bold text-base mt-2 inline-block">
                          {item.priceFormatted}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        {cartItem ? (
                          <div className="flex items-center gap-2 bg-primary rounded-xl px-3 py-2">
                            <button
                              onClick={() => updateQuantity(item.name, -1)}
                              className="p-1 hover:bg-primary-foreground/20 rounded-lg transition-colors"
                            >
                              <Minus className="w-4 h-4 text-primary-foreground" />
                            </button>
                            <span className="text-primary-foreground font-bold w-6 text-center">
                              {cartItem.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.name, 1)}
                              className="p-1 hover:bg-primary-foreground/20 rounded-lg transition-colors"
                            >
                              <Plus className="w-4 h-4 text-primary-foreground" />
                            </button>
                          </div>
                        ) : (
                          <button
                            onClick={() => addToCart({ name: item.name, price: item.price })}
                            className="flex items-center gap-2 px-4 py-2.5 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-colors text-sm shadow-sm"
                          >
                            <Plus className="w-4 h-4" />
                            Adicionar
                          </button>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          )}

          {step === "cart" && (
            <div className="p-5">
              <h3 className="text-lg font-bold text-foreground mb-5 flex items-center gap-3">
                <div className="p-2 bg-primary/20 rounded-xl">
                  <ShoppingCart className="w-5 h-5 text-primary" />
                </div>
                Seu Carrinho
              </h3>
              
              {cart.length === 0 ? (
                <div className="text-center py-16">
                  <div className="p-4 bg-card rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                    <ShoppingCart className="w-10 h-10 text-foreground/30" />
                  </div>
                  <p className="text-foreground/50 mb-4">Seu carrinho está vazio</p>
                  <button
                    onClick={() => setStep("menu")}
                    className="px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-colors shadow-md"
                  >
                    Ver Cardápio
                  </button>
                </div>
              ) : (
                <div className="space-y-3">
                  {cart.map((item) => (
                    <div
                      key={item.name}
                      className="flex items-center justify-between p-4 bg-card rounded-xl border border-border/40"
                    >
                      <div className="flex-1">
                        <h4 className="font-bold text-foreground text-sm">{item.name}</h4>
                        <p className="text-primary font-bold text-base mt-1">
                          {formatCurrency(item.price * item.quantity)}
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2 bg-primary rounded-xl px-3 py-2">
                          <button
                            onClick={() => updateQuantity(item.name, -1)}
                            className="p-1 hover:bg-primary-foreground/20 rounded-lg transition-colors"
                          >
                            <Minus className="w-4 h-4 text-primary-foreground" />
                          </button>
                          <span className="text-primary-foreground font-bold w-6 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.name, 1)}
                            className="p-1 hover:bg-primary-foreground/20 rounded-lg transition-colors"
                          >
                            <Plus className="w-4 h-4 text-primary-foreground" />
                          </button>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.name)}
                          className="p-2.5 text-destructive bg-destructive/10 hover:bg-destructive/20 rounded-xl transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}

                  {/* Sugestão de Bebidas */}
                  <div className="bg-primary/10 rounded-xl p-5 border border-primary/20 mt-5">
                    <div className="flex items-center gap-2 mb-3">
                      <GlassWater className="w-5 h-5 text-primary" />
                      <span className="font-bold text-foreground">Adicione bebidas ao pedido</span>
                    </div>
                    <p className="text-foreground/60 text-sm mb-4">
                      Refrigerantes, sucos, cervejas ou drinks para acompanhar.
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      <button
                        onClick={() => {
                          setActiveCategory("bebidas")
                          setStep("menu")
                        }}
                        className="flex items-center gap-2 px-4 py-2 bg-card text-foreground rounded-xl text-sm font-medium hover:bg-card/80 transition-colors border border-border/30"
                      >
                        <GlassWater className="w-4 h-4 text-primary" />
                        Refrigerantes
                      </button>
                      <button
                        onClick={() => {
                          setActiveCategory("cervejas")
                          setStep("menu")
                        }}
                        className="flex items-center gap-2 px-4 py-2 bg-card text-foreground rounded-xl text-sm font-medium hover:bg-card/80 transition-colors border border-border/30"
                      >
                        <Beer className="w-4 h-4 text-primary" />
                        Cervejas
                      </button>
                      <button
                        onClick={() => {
                          setActiveCategory("drinks")
                          setStep("menu")
                        }}
                        className="flex items-center gap-2 px-4 py-2 bg-card text-foreground rounded-xl text-sm font-medium hover:bg-card/80 transition-colors border border-border/30"
                      >
                        <Wine className="w-4 h-4 text-primary" />
                        Drinks
                      </button>
                    </div>
                  </div>

                  <div className="border-t border-border/30 pt-5 mt-5">
                    <div className="flex items-center justify-between text-xl font-bold">
                      <span className="text-foreground">Total:</span>
                      <span className="text-primary">{formatCurrency(total)}</span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 mt-5">
                    <button
                      onClick={() => setStep("menu")}
                      className="w-full py-3.5 border-2 border-border/50 text-foreground rounded-xl font-semibold hover:bg-card transition-colors flex items-center justify-center gap-2"
                    >
                      <Plus className="w-5 h-5" />
                      Continuar Comprando
                    </button>
                    <button
                      onClick={() => setStep("checkout")}
                      className="w-full py-4 bg-primary text-primary-foreground rounded-xl font-bold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 shadow-md"
                    >
                      Finalizar Pedido
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {step === "checkout" && (
            <div className="p-4">
              <div className="flex items-center gap-3 mb-6">
                <button
                  onClick={() => setStep("cart")}
                  className="p-2 hover:bg-foreground/10 rounded-full transition-colors"
                >
                  <ArrowLeft className="w-5 h-5 text-foreground" />
                </button>
                <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                  <User className="w-5 h-5 text-primary" />
                  Dados do Pedido
                </h3>
              </div>

              <div className="space-y-4">
                {/* Customer Name */}
                <div>
                  <label className="block text-foreground font-medium mb-2 text-sm">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="Digite seu nome"
                    className="w-full px-4 py-3 bg-foreground/10 border border-border/30 rounded-xl text-foreground placeholder:text-foreground/50 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>

                {/* Customer Phone */}
                <div>
                  <label className="block text-foreground font-medium mb-2 text-sm">
                    Telefone (opcional)
                  </label>
                  <input
                    type="tel"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    placeholder="(00) 00000-0000"
                    className="w-full px-4 py-3 bg-foreground/10 border border-border/30 rounded-xl text-foreground placeholder:text-foreground/50 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>

                {/* Delivery Method */}
                <div>
                  <label className="block text-foreground font-medium mb-3 text-sm">
                    Tipo de Pedido *
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => setDeliveryMethod("retirada")}
                      className={`p-4 rounded-xl font-medium transition-all text-sm flex flex-col items-center gap-2 ${
                        deliveryMethod === "retirada"
                          ? "bg-primary text-primary-foreground"
                          : "bg-foreground/10 text-foreground/70 hover:bg-foreground/20 border border-border/30"
                      }`}
                    >
                      <ShoppingCart className="w-5 h-5" />
                      Retirada no Local
                    </button>
                    <button
                      onClick={() => setDeliveryMethod("entrega")}
                      className={`p-4 rounded-xl font-medium transition-all text-sm flex flex-col items-center gap-2 ${
                        deliveryMethod === "entrega"
                          ? "bg-primary text-primary-foreground"
                          : "bg-foreground/10 text-foreground/70 hover:bg-foreground/20 border border-border/30"
                      }`}
                    >
                      <Send className="w-5 h-5" />
                      Entrega
                    </button>
                  </div>
                </div>

                {/* Address - only if delivery */}
                {deliveryMethod === "entrega" && (
                  <div>
                    <label className="block text-foreground font-medium mb-2 text-sm">
                      Endereço de Entrega *
                    </label>
                    <textarea
                      value={customerAddress}
                      onChange={(e) => setCustomerAddress(e.target.value)}
                      placeholder="Rua, número, bairro, complemento..."
                      rows={2}
                      className="w-full px-4 py-3 bg-foreground/10 border border-border/30 rounded-xl text-foreground placeholder:text-foreground/50 focus:outline-none focus:border-primary transition-colors resize-none"
                    />
                  </div>
                )}

                {/* Payment Method */}
                <div>
                  <label className="block text-foreground font-medium mb-3 text-sm flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-primary" />
                    Forma de Pagamento *
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {["Dinheiro", "Pix", "Débito", "Crédito"].map((method) => (
                      <button
                        key={method}
                        onClick={() => setPaymentMethod(method)}
                        className={`p-4 rounded-xl font-medium transition-all text-sm ${
                          paymentMethod === method
                            ? "bg-primary text-primary-foreground"
                            : "bg-foreground/10 text-foreground/70 hover:bg-foreground/20 border border-border/30"
                        }`}
                      >
                        {method}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Observations */}
                <div>
                  <label className="block text-foreground font-medium mb-2 text-sm">
                    Observações (opcional)
                  </label>
                  <textarea
                    value={observations}
                    onChange={(e) => setObservations(e.target.value)}
                    placeholder="Alguma observação sobre o pedido?"
                    rows={3}
                    className="w-full px-4 py-3 bg-foreground/10 border border-border/30 rounded-xl text-foreground placeholder:text-foreground/50 focus:outline-none focus:border-primary transition-colors resize-none"
                  />
                </div>

                {/* Order Summary */}
                <div className="bg-foreground/5 rounded-xl p-4 border border-border/30">
                  <h4 className="font-bold text-foreground mb-3 text-sm">Resumo do Pedido</h4>
                  <div className="space-y-2 text-sm">
                    {cart.map((item) => (
                      <div key={item.name} className="flex justify-between text-foreground/70">
                        <span>{item.quantity}x {item.name}</span>
                        <span>{formatCurrency(item.price * item.quantity)}</span>
                      </div>
                    ))}
                    <div className="border-t border-border/30 pt-2 mt-2 flex justify-between font-bold text-foreground">
                      <span>Total:</span>
                      <span className="text-primary">{formatCurrency(total)}</span>
                    </div>
                  </div>
                </div>

                {/* Send Button */}
                <button
                  onClick={sendToWhatsApp}
                  disabled={!customerName || !paymentMethod || !deliveryMethod || cart.length === 0 || (deliveryMethod === "entrega" && !customerAddress)}
                  className="w-full py-4 bg-green-600 text-white rounded-xl font-bold hover:bg-green-700 transition-colors flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Enviar Pedido pelo WhatsApp
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Footer Navigation */}
        {cart.length > 0 && step !== "checkout" && (
          <div className="p-4 border-t border-border/30 bg-secondary">
            <div className="flex gap-3">
              {step === "cart" && (
                <button
                  onClick={() => setStep("menu")}
                  className="flex-1 py-3 border border-border/30 text-foreground rounded-xl font-medium hover:bg-foreground/10 transition-colors"
                >
                  Adicionar Mais
                </button>
              )}
              {step === "menu" && (
                <button
                  onClick={() => setStep("cart")}
                  className="flex-1 py-3 bg-primary text-primary-foreground rounded-xl font-bold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
                >
                  <ShoppingCart className="w-5 h-5" />
                  Ver Carrinho ({formatCurrency(total)})
                </button>
              )}
            </div>
          </div>
        )}

        {step === "checkout" && (
          <div className="p-4 border-t border-border/30 bg-secondary">
            <button
              onClick={() => setStep("cart")}
              className="w-full py-3 border border-border/30 text-foreground rounded-xl font-medium hover:bg-foreground/10 transition-colors"
            >
              Voltar ao Carrinho
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
