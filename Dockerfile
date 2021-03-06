FROM openjdk:14

ENV ENVIRONMENT=prod

MAINTAINER github.com/RolfBuchwaldAlvarez

ADD curiocitybackend/target/curiocity.jar curiocity.jar

CMD ["sh", "-c", "java -Dserver.port=$PORT -jar /curiocity.jar"]