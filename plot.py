import matplotlib.pyplot as plt
from datetime import datetime

data = {}
data['time'] = []
data['price'] = []

with open('SSD_price.csv') as file:

    for line in file:
        time, price = line.split(',', 1)
        data['time'].append(time)
        data['price'].append(float(price[:5].replace(',', '.')))

plt.plot(data['time'], data['price'],'r')

plt.grid(linestyle='-', linewidth=0.5)
plt.title('Samsung 860 evo 500GB SSD price over time pccomponentes.com')
plt.ylabel('SSD price [ € ]')
plt.savefig('ssdprice.png',dpi = 300)
plt.show()
