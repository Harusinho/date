Na função comparar datas, recebe dois parâmetros e para cada parâmetro é criado um objeto representando a data passada na mesma. Depois é feito uma condicional para verificar qual é a data maior(if, else).
Na função calcular intervalo, recebe dois parâmetros e para cada parâmetro é criado um objeto representando a data passada na mesma.Depois usa-se um if para verificar se a primeira data não é posterior a segunda, 
caso ocorra o erro a função é encerrada.
Usando o getFullYear, getMonth e getDate, obtem-se o ano, mês e dia. Verifica-se a diferença entre as datas e decrementa -1 caso a segunda data estiver antes da primeira no mesmo ano.
Depois ele verifica a diferença dos meses e como o valor da diferença fica negativa ele adiciona 12 meses para arrumar.Depois calcula a diferença dos dias, fazendo algo parecido com os meses e imprimi os valores.
Foi criado um objeto Date e foi atribuído à variável data. Em seguida, usando as constantes hora e minuto, foi extraido a hora e o minuto atuais com os métodos getHours e getMinutes. Para o dia e o mês, 
foi convertido os valores para string e usado o método padStart para garantir que tenham dois caracteres, preenchendo com zero à esquerda, se for necessário. No caso do mês, como ele é indexado a partir de 0, 
soma-se 1 ao seu valor retornado pelo método getMonth. Para o ano, foi utilizado getFullYear para obter o ano completo. Por fim, foi concatenado todos esses valores usando template strings.


