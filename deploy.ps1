npm run build

"prompt

open nt39.unoeuro.com
user gaba.name m977m78994
cd mikkel/wishlist
mdel static/css/*
rmdir static/css
mdel static/js/*
rmdir static/js
rmdir static
mdel *

mput build/*
mkdir static
mkdir static/css
mkdir static/js
cd static/css
mput build/static/css/*
cd ../js
mput build/static/js/*

quit" | ftp -n