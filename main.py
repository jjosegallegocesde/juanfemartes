import pandas as pd
from data.platos import platosPopulares

tablaPlatos=pd.DataFrame(platosPopulares)
print(tablaPlatos)