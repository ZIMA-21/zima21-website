import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";

export default function Zima21Website() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-white">
        <motion.img
          src="/CAPRA-B.jpg"
          alt="Loading"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-32 h-32"
        />
      </div>
    );
  }

  return (
    <div className="bg-white text-black font-sans min-h-screen">
      <header className="p-6 text-center border-b">
        <img src="/ZIMA-21-B.jpg" alt="Zima 21 Logo" className="mx-auto w-40" />
      </header>

      <main className="p-6 max-w-3xl mx-auto">
        <section id="home" className="mb-12">
          <h1 className="text-3xl font-bold mb-4">Chi siamo</h1>
          <p>Zima 21 è un'associazione culturale e sportiva nata per promuovere esperienze autentiche, eventi sociali e connessioni significative con il territorio e le persone. Ci impegniamo a costruire una community attiva, inclusiva e appassionata. Unisciti a noi per fare la differenza!</p>
        </section>

        <section id="news" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">News</h2>
          <p>Ultimi aggiornamenti, eventi e notizie dell'associazione.</p>
        </section>

        <section id="tesseramenti" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Tesseramento Zima21 2025</h2>
          <p className="mb-4">
            Vuoi sostenere e partecipare attivamente alle proposte di Zima21? Il primo passo è il tesseramento.
          </p>
          <p className="mb-4">
            <strong>Come funziona?</strong><br/>
            È semplice: scrivici in direct e ti spiegheremo tutti i passaggi per completare l'iscrizione.
          </p>
          <p className="mb-4">
            <strong>Cosa comporta il tesseramento AICS?</strong><br/>
            Tesserarti con noi significa entrare a far parte della rete nazionale AICS (Associazione Italiana Cultura Sport), che ti offre:
            <ul className="list-disc list-inside">
              <li>Copertura assicurativa durante tutte le attività</li>
              <li>Accesso agli eventi privati targati Zima21</li>
              <li>Sconti e convenzioni in tutta Italia con partner AICS</li>
              <li>Supporto all'associazione</li>
              <li>Membro della community WhatsApp per tutte le news</li>
            </ul>
          </p>
          <p className="mb-4 font-semibold">Costo tessera: 15,00€</p>

          <form action="https://www.paypal.com/donate" method="post" target="_blank" className="mb-6">
            <input type="hidden" name="business" value="zima21aps@gmail.com" />
            <input type="hidden" name="currency_code" value="EUR" />
            <input type="hidden" name="amount" value="15" />
            <Button type="submit">Paga con PayPal</Button>
          </form>

          <form className="space-y-4">
            <Input type="text" placeholder="Nome e cognome" required />
            <Input type="text" placeholder="Data di nascita" required />
            <Input type="text" placeholder="Luogo di nascita" required />
            <Input type="text" placeholder="Residenza" required />
            <Input type="email" placeholder="Email" required />
            <Input type="tel" placeholder="Numero di telefono" required />
            <Button type="submit">Invia modulo</Button>
          </form>
        </section>

        <section id="ecommerce">
          <h2 className="text-2xl font-semibold mb-4">Shop</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-4">
                <img src="/path-to-maglietta.jpg" alt="Maglietta Zima 21" className="mb-2" />
                <p className="mb-2">Maglietta Zima 21 - 20,00€</p>
                <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
                  <input type="hidden" name="cmd" value="_xclick" />
                  <input type="hidden" name="business" value="zima21aps@gmail.com" />
                  <input type="hidden" name="item_name" value="Maglietta Zima 21" />
                  <input type="hidden" name="amount" value="20.00" />
                  <input type="hidden" name="currency_code" value="EUR" />
                  <input type="hidden" name="shipping" value="2.99" />
                  <Button type="submit">Acquista</Button>
                </form>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <img src="/path-to-cappellino.jpg" alt="Cappellino Zima 21" className="mb-2" />
                <p className="mb-2">Cappellino Zima 21 - 15,00€</p>
                <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
                  <input type="hidden" name="cmd" value="_xclick" />
                  <input type="hidden" name="business" value="zima21aps@gmail.com" />
                  <input type="hidden" name="item_name" value="Cappellino Zima 21" />
                  <input type="hidden" name="amount" value="15.00" />
                  <input type="hidden" name="currency_code" value="EUR" />
                  <input type="hidden" name="shipping" value="2.99" />
                  <Button type="submit">Acquista</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <footer className="text-center p-6 text-sm border-t mt-12">
        &copy; 2025 Zima 21 - Tutti i diritti riservati<br/>
        IBAN: IT97E0851161230000000503751 - Intestato a ZIMA 21 APS
      </footer>
    </div>
  );
}
