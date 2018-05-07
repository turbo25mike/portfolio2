FROM nginx:latest
COPY dist/portfolio /usr/share/nginx/html
EXPOSE 80