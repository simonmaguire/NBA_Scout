from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from sqlalchemy.engine import URL
import os
from dotenv import load_dotenv

load_dotenv()

engine = create_engine(os.getenv('POSTGRES_URL', ''))
Session = sessionmaker(bind=engine)
session = Session()

def get_db():
    db = session
    try:
        yield db
    finally:
        db.close()