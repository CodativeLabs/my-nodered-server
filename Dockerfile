FROM nodered/node-red:latest
 
# Set working directory
WORKDIR /usr/src/node-red
 
# Install useful Node-RED nodes
RUN npm install node-red-dashboard \
    node-red-contrib-postgresql
 
# Expose Node-RED port
EXPOSE 1880
 
# Start Node-RED
CMD ["npm", "start", "--", "--userDir", "/data"]

# Copy custom settings
COPY settings.js /data/settings.js
